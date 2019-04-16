const progress = (event) => {
    const { total, loaded } = event;
    let val = Math.ceil(loaded / total * 100);
    return val;

};

const Utility = {
    progress,
};

export default Utility;