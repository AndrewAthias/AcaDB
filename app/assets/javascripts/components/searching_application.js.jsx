
var SearchingApplication = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>AcaDB</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SearchingTable />
          </div>
        </div>
      </div>
    )
  }
});