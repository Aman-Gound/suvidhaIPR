import { useEffect, useMemo, useState } from "react";

const GOOGLE_FORM_ENDPOINT =
  "https://docs.google.com/forms/d/e/1FAIpQLSf41viVYBbL_0btRw8ZzBv864botnuh0GPk_j8ZXwYF5PtSKA/formResponse";
const CONTACT_DRAFT_KEY = "suvidha-ipr-contact-draft";

// Set to "0" for a single-section Google Form.
// If the Google Form has 3 sections, use "0,1,2" (one index per section).
const GOOGLE_PAGE_HISTORY = "0";

const GOOGLE_ENTRY_IDS = {
  applicantName: "entry.532865653",
  applicantType: "entry.1720485152",
  email: "entry.1557082443",
  phone: "entry.1251354269",
  country: "entry.1259734236",
  address: "entry.2052643743",
  inventionTitle: "entry.972438907",
  technology: "entry.778896473",
  description: "entry.1254849468",
  problem: "entry.2098362373",
  novelFeatures: "entry.1802562808",
  advantages: "entry.1245096907",
  inventorName: "entry.2006718399",
  numberOfInventors: "entry.624353696",
  inventorEmail: "entry.689325127",
  inventorAddress: "entry.568734568",
  priorArt: "entry.379450967",
  keywords: "entry.479876169",
  additionalInformation: "entry.2078385509",
};

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-300 outline-none text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
const selectClass = `${inputClass} bg-white`;
const textareaClass = `${inputClass} resize-none`;

const Label = ({ children }) => (
  <label className="block text-sm font-medium text-slate-700 mb-2">
    {children}
  </label>
);

const Section = ({ title, description, children, last = false }) => (
  <section className={`p-6 md:p-8 ${last ? "" : "border-b border-slate-200"}`}>
    {title && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {description && (
          <p className="text-sm text-slate-500 mt-1">{description}</p>
        )}
      </div>
    )}
    {children}
  </section>
);

const ContactForm = () => {
  const [submitState, setSubmitState] = useState("idle");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const imagePreviews = useMemo(
    () =>
      selectedFiles
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => ({
          name: file.name,
          url: URL.createObjectURL(file),
        })),
    [selectedFiles],
  );

  useEffect(
    () => () =>
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview.url)),
    [imagePreviews],
  );

  // Restore saved draft
  useEffect(() => {
    try {
      const savedDraft = JSON.parse(
        localStorage.getItem(CONTACT_DRAFT_KEY) || "{}",
      );

      Object.entries(savedDraft).forEach(([fieldName, value]) => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field && field.type !== "file") {
          field.value = value;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Save draft on every change
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (
      !Object.prototype.hasOwnProperty.call(GOOGLE_ENTRY_IDS, name) ||
      type === "file"
    ) {
      return;
    }

    try {
      const currentDraft = JSON.parse(
        localStorage.getItem(CONTACT_DRAFT_KEY) || "{}",
      );
      localStorage.setItem(
        CONTACT_DRAFT_KEY,
        JSON.stringify({ ...currentDraft, [name]: value }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const clearDraft = () => {
    try {
      localStorage.removeItem(CONTACT_DRAFT_KEY);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files || []));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setSelectedFiles(Array.from(e.dataTransfer.files || []));
  };

  const removeFile = (fileToRemove) => {
    setSelectedFiles((files) =>
      files.filter(
        (file) =>
          !(
            file.name === fileToRemove.name &&
            file.lastModified === fileToRemove.lastModified
          ),
      ),
    );
  };

  const handleReset = () => {
    clearDraft();
    setSelectedFiles([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams();

    Object.entries(GOOGLE_ENTRY_IDS).forEach(([fieldName, entryId]) => {
      const value = formData.get(fieldName)?.toString().trim() ?? "";
      // Skip empty optional fields so Google doesn't reject them
      if (value) payload.append(entryId, value);
    });

    // Required by Google Forms for a valid submission
    payload.append("fvv", "1");
    payload.append("pageHistory", GOOGLE_PAGE_HISTORY);

    setSubmitState("submitting");

    try {
      await fetch(GOOGLE_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      setSubmitState("success");
      form.reset();
      clearDraft();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setSubmitState("error");
    }
  };

  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <div className="min-h-screen neo-raised px-3 py-6 sm:px-4 sm:py-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <p className="text-sm font-medium text-[#6366f1] mb-2">
                PATENT APPLICATION
              </p>

              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                Submit Your Invention
              </h1>

              <p className="mt-2 text-slate-500 max-w-2xl">
                Provide the details of your invention and applicant information
                to begin the patent filing process.
              </p>
            </div>

            {submitState === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-[#c7d2fe] bg-white px-6 py-16 text-center shadow-sm sm:px-10">
                <div className="success-pop flex h-24 w-24 items-center justify-center rounded-full bg-[#e0e2ff] text-6xl font-bold text-[#6366f1]">
                  ✓
                </div>
                <h2 className="mt-8 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Form submitted successfully
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Thank you for sharing your invention. Our team will review
                  your details and contact you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onChange={handleChange}
                onReset={handleReset}
                className="contact-form w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:rounded-2xl"
              >
                {submitState === "error" && (
                  <div className="border-b border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 sm:px-8">
                    Something went wrong while submitting. Please try again.
                  </div>
                )}

                {/* Applicant Details */}
                <Section
                  title="Applicant Details"
                  description="Enter the information of the person or organization filing the patent."
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label>Applicant Name *</Label>
                      <input
                        type="text"
                        name="applicantName"
                        placeholder="Enter applicant name"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label>Applicant Type *</Label>
                      <select
                        name="applicantType"
                        required
                        className={selectClass}
                      >
                        <option value="">Select applicant type</option>
                        <option>Individual</option>
                        <option>Startup</option>
                        <option>Company</option>
                        <option>Educational Institution</option>
                        <option>Research Organization</option>
                      </select>
                    </div>

                    <div>
                      <Label>Email Address *</Label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label>Phone Number *</Label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label>Country *</Label>
                      <select name="country" required className={selectClass}>
                        <option value="">Select country</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <Label>Address *</Label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Enter complete address"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </Section>

                {/* Invention Details */}
                <Section
                  title="Invention Details"
                  description="Tell us about your invention and what makes it unique."
                >
                  <div className="space-y-5">
                    <div>
                      <Label>Title of Invention *</Label>
                      <input
                        type="text"
                        name="inventionTitle"
                        placeholder="Enter the title of your invention"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label>Field / Technology *</Label>
                      <input
                        type="text"
                        name="technology"
                        placeholder="e.g. Artificial Intelligence, Healthcare, Software..."
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label>Detailed Description *</Label>
                      <textarea
                        name="description"
                        rows="6"
                        required
                        placeholder="Describe your invention in detail..."
                        className={textareaClass}
                      />
                    </div>

                    <div>
                      <Label>Problem Being Solved *</Label>
                      <textarea
                        name="problem"
                        rows="4"
                        required
                        placeholder="What problem does your invention solve?"
                        className={textareaClass}
                      />
                    </div>

                    <div>
                      <Label>Novel Features *</Label>
                      <textarea
                        name="novelFeatures"
                        rows="4"
                        required
                        placeholder="What makes your invention new or different?"
                        className={textareaClass}
                      />
                    </div>

                    <div>
                      <Label>Advantages of the Invention</Label>
                      <textarea
                        name="advantages"
                        rows="4"
                        placeholder="Describe the benefits or advantages..."
                        className={textareaClass}
                      />
                    </div>
                  </div>
                </Section>

                {/* Inventor Details */}
                <Section
                  title="Inventor Details"
                  description="Provide information about the inventor or inventors."
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label>Inventor Name *</Label>
                      <input
                        type="text"
                        name="inventorName"
                        placeholder="Enter inventor name"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label>Number of Inventors</Label>
                      <select name="numberOfInventors" className={selectClass}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                      </select>
                    </div>

                    <div>
                      <Label>Inventor Email</Label>
                      <input
                        type="email"
                        name="inventorEmail"
                        placeholder="inventor@example.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label>Inventor Address</Label>
                      <input
                        type="text"
                        name="inventorAddress"
                        placeholder="Enter inventor address"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </Section>

                {/* Prior Art */}
                <Section
                  title="Prior Art & Existing Technology"
                  description="Tell us about existing solutions related to your invention."
                >
                  <div className="space-y-5">
                    <div>
                      <Label>Existing Technology / Prior Art</Label>
                      <textarea
                        name="priorArt"
                        rows="5"
                        placeholder="Describe similar existing products, technologies, patents, or solutions..."
                        className={textareaClass}
                      />
                    </div>

                    <div>
                      <Label>Keywords</Label>
                      <input
                        type="text"
                        name="keywords"
                        placeholder="e.g. AI, automation, healthcare, machine learning"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </Section>

                {/* One unified documents and images section. */}
                <Section
                  title="Supporting Documents & Images"
                  description="Add drawings, screenshots, technical documents, or other files related to your invention."
                >
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleFileDrop}
                    className={`relative rounded-2xl border-2 border-dashed p-6 text-center transition sm:p-8 ${
                      isDragging
                        ? "border-[#6366f1] bg-[#f3f3ff]"
                        : "border-slate-300 bg-slate-50/60 hover:border-[#6366f1] hover:bg-[#fafaff]"
                    }`}
                  >
                    <input
                      id="supporting-documents"
                      type="file"
                      name="documents"
                      multiple
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      onChange={handleFileChange}
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <div className="pointer-events-none mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8e9ff] text-[#6366f1]">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-7 w-7"
                      >
                        <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" />
                        <path d="M5 14.5v3A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-3" />
                      </svg>
                    </div>
                    <p className="pointer-events-none mt-4 text-sm font-semibold text-slate-800">
                      Drop your files here
                    </p>
                    <p className="pointer-events-none mt-1 text-xs text-slate-500">
                      or click to browse from your device
                    </p>
                    <span className="pointer-events-none mt-4 inline-flex rounded-lg bg-[#6366f1] px-4 py-2 text-xs font-semibold text-white shadow-sm">
                      Choose files
                    </span>
                    <p className="pointer-events-none mt-4 text-[11px] text-slate-400">
                      PDF, DOC, DOCX, PNG, JPG or JPEG · Multiple files allowed
                    </p>

                    {selectedFiles.length > 0 && (
                      <div className="relative z-10 mt-6 border-t border-slate-200 pt-5 text-left">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Selected files ({selectedFiles.length})
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {selectedFiles.map((file) => {
                            const preview = imagePreviews.find(
                              (item) => item.name === file.name,
                            );

                            return (
                              <div
                                key={`${file.name}-${file.lastModified}`}
                                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
                              >
                                {preview ? (
                                  <img
                                    src={preview.url}
                                    alt={file.name}
                                    className="h-12 w-12 rounded-md object-cover"
                                  />
                                ) : (
                                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#e0e2ff] text-lg">
                                    📄
                                  </span>
                                )}
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-xs font-medium text-slate-700">
                                    {file.name}
                                  </p>
                                  <p className="mt-0.5 text-[11px] text-slate-400">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(file)}
                                  aria-label={`Remove ${file.name}`}
                                  className="shrink-0 rounded-md p-1 text-lg leading-none text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                                >
                                  ×
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </Section>

                {/* Additional Information */}
                <Section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-1">
                    Additional Information
                  </h2>

                  <p className="text-sm text-slate-500 mb-5">
                    Anything else you would like us to know?
                  </p>

                  <textarea
                    name="additionalInformation"
                    rows="5"
                    placeholder="Enter additional information..."
                    className={textareaClass}
                  />
                </Section>

                {/* Declaration + actions */}
                <Section last>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="declaration"
                      required
                      className="mt-1 w-4 h-4 accent-blue-600"
                    />

                    <p className="text-sm text-slate-600 leading-6">
                      I confirm that the information provided in this form is
                      accurate and complete to the best of my knowledge. I
                      understand that submission of this form does not by itself
                      constitute the filing of a patent application with a
                      patent office.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
                    <button
                      type="reset"
                      className="px-6 py-3 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                    >
                      Clear Form
                    </button>

                    <button
                      type="submit"
                      disabled={submitState === "submitting"}
                      className="px-7 py-3 rounded-lg bg-[#6366f1] text-white text-sm font-medium hover:bg-blue-700 transition shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitState === "submitting"
                        ? "Submitting..."
                        : "Submit Patent Application"}
                    </button>
                  </div>
                </Section>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
