import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// 1. Add comment

function addComment(text) {
    return {
      type: ADD_COMMENT,
      text,
      id: uuid.v4()
    }
};

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('new text!'); //for example
boundAddComment('next text');


// 2. Remove comment

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id 
    }
};

const boundRemoveComment = id => dispatch(removeComment(id));
  
boundRemoveComment(5); //for example


  // 3. Edit comment

function editComment(id) {
    return {
        type: EDIT_COMMENT,
        id,
        text 
    }
};

const boundEditComment = (id, text) => dispatch(editComment(id, text));

boundEditComment(10, 'text added to comment'); //for example


// 4. Thumb up comment

function thumbUpComment(value, id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        value: + 1
    }
};

const boundThumbUpComment = (value, id) => dispatch(thumbUpComment(value, id));

boundThumbUpComment(+1); //for example


// 5. Thumb down comment

function thumbDownComment(value, id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        value: - 1
    }
};

const boundThumbDownComment = (value, id) => disptach(thumbDownComment(value, id));

boundThumbDownComment(-1); //for example