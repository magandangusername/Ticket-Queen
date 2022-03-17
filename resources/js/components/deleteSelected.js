
// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from "axios";

// function deleteSelected() {
//     const deleteSelected = (id) => {
//         axios.delete(`http://localhost:8000/api/user/${id}/delete`).then(function(response){
//         console.log(response.data);
//         getUsers();
//     });
// }
// return (
// <button onClick={() => deleteSelected(user.id)}>Delete</button>);
// }
// export default deleteSelected;

// if (document.getElementById('deleteSelected')) {
//     ReactDOM.render(<deleteSelected />, document.getElementById('deleteSelected'));
// }
import React from 'react';
import ReactDOM from 'react-dom';

function deleteSelected() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">deleteSelected</div>

                        <div className="card-body">deleteSelected</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default deleteSelected;

if (document.getElementById('deleteSelected')) {
    ReactDOM.render(<deleteSelected />, document.getElementById('deleteSelected'));
}
