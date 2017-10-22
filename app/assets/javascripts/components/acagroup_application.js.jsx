
var AcagroupApplication = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>AcaDB</h1>
          <p>Uniting the Acappella Universe</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AcagroupTable />
          </div>
        </div>
      </div>
    )
  }
});