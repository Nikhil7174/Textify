import React from 'react'

export default function Alert(props) {

    // const hideAlert = () => {
    //     document.getElementById("alertBox").style.display = "none";
    // }

    const capatilize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '45px' }}>
            {props.alert && <div id='alertBox' class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <div><strong>{capatilize(props.alert.type)}</strong>{props.alert.msg}</div>
                {/* <button id='cross' type="button" class="close" onClick={hideAlert} data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> */}
            </div>}
        </div>
    )
}
