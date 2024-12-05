const higherOrderComp = (RestCard) => {
    return (props) => {
        return (
            <div className="relative m-1 w-[15.9%] mt-2">
                <label className="absolute rounded-ss-sm top-0. right-2 bg-black text-white px-2 py-1">
                    Closed...
                </label>
                <RestCard {...props} />
            </div>
        );
    };
};

export default higherOrderComp;
