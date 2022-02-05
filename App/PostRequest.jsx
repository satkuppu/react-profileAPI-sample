import React from 'react';

class PostRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: null,
    };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: 'sV23pdfQ3VQdsHccqPJpXro0hdfqYYWFcV8izWGoLIrwEBUf',
      },
      body: JSON.stringify({
        orgId: 1539,
        regions: ['EU'],
        search: {
          email_sha256_lowercase: [
            '88df7836ab8b7527c5af9e08cdaff5dff178f2786b6ea4ae48ce2321d31f792e',
          ],
        },
      }),
    };
    fetch('https://api-qa.zeotap.com/cdp/v1/users/_search', requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ postId: JSON.stringify(data[0].profile) })
      );
  }

  render() {
    const { postId } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple POST Request</h5>
        <div className="card-body">Returned Id: {postId}</div>
      </div>
    );
  }
}

export { PostRequest };
