import React from 'react';

function NoItem () {

    return (
        <div className="task-content">
            <span className="no-task" data-cy="item-message-error">
                No Task
            </span>
        </div>
    )

}

export default NoItem;