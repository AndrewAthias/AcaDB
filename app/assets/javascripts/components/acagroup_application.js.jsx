var AcagroupApplication = React.createClass({
  getInitialState: function() {
    return { acagroups: [] };
  },
  componentDidMount: function() {
    this.getDataFromApi();
  },
  getDataFromApi: function() {
    var self = this;
    $.ajax({
      url: '/api/acagroups',
      success: function(data) {
        self.setState({ acagroups: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  handleSearch: function(acagroups) {
    this.setState({ acagroups: acagroups });
  },
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>AcaDB</h1>
          <p>Uniting the Acappella Universe</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-14">
            <AcagroupTable acagroups={this.state.acagroups} />
          </div>
        </div>
      </div>
    )
  }
});