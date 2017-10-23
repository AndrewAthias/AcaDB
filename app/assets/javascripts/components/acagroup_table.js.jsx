var AcagroupTable = React.createClass({
  render: function() {
     var acagroups = [];
    this.props.acagroups.forEach(function(acagroup) {
      acagroups.push(<Acagroup acagroup={acagroup}
                         key={'acagroup' + acagroup.id}/>);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2">Name</th>
            <th className="col-md-2">University</th>
            <th className="col-md-2">Gender</th>
            <th className="col-md-2">City</th>
            <th className="col-md-2">State</th>
            <th className="col-md-2">Email</th>
            <th className="col-md-2">Website</th>  
          </tr>
        </thead>
        <tbody>
          {acagroups}
        </tbody>
      </table>
    )
  }
});