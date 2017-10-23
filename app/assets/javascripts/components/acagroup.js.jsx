var Acagroup = React.createClass({
  propTypes: {
    Name: React.PropTypes.string,
    University: React.PropTypes.string,
    Gender: React.PropTypes.string,
    City: React.PropTypes.string,
    State: React.PropTypes.string,
    Email: React.PropTypes.string,
    Website: React.PropTypes.string
  },
  render: function() {
    var acagroup = this.props.acagroup;
    return(
      <tr>
        <td>{acagroup.Name}</td>
        <td>{acagroup.University}</td>
        <td>{acagroup.Gender}</td>
        <td>{acagroup.City}</td>
        <td>{acagroup.State}</td>
        <td>{acagroup.Email}</td>
        <td>{acagroup.Website}</td>
      </tr>
    )
  }
});