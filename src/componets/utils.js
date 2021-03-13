function id(prefix='id') {
    let lastId = 0;
    return () => {
        ++lastId;
        return `${prefix}${lastId}`;
    }
}

let nextId = id();

export default nextId