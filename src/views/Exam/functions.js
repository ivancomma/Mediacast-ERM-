const grid = 8;

// generating fake data
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `list-item ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, start, end) => {
    const result = Array.from(list);
    const [removed] = result.splice(start, 1);
    result.splice(end, 0, removed);
    return result;
};

/**
 * Move an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    console.log('source->',source)
    console.log('destination->',destination)
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const copyClone = Array.from(source)
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = copyClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging anitem
    background: isDragging ? 'darkred' : 'grey',

    // styles on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 350,
});

export {
    getListStyle,
    getItemStyle,
    move,
    getItems,
    reorder
}