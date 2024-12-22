const vscale = true; // This can be true or false depending on your logic

const gridEnd = vscale ? {
    x: 10,
    y: 20,
    scale: 5
} : {
    x: 10,
    y: 20
};

console.log(gridEnd);
