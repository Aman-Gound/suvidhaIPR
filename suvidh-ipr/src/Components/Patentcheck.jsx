const Patentcheck = () => {
  return (
    <div className="border m-2 p-2 ">
      <div className="w-1/2 h-1/2 m-auto">
        <iframe
          src="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
          title="Example Website"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
};

export default Patentcheck;
