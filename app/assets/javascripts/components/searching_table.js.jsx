var SearchingTable = React.createClass({
  render: function() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Gender</th>
            <th className="col-md-3">Location</th>
            <th className="col-md-4">Email</th>
            <th className="col-md-4">Website</th>  
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
});