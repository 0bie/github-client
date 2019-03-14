import axios from 'axios';
import React, {Component} from 'react';
import {
  ADD_STAR,
  REMOVE_STAR,
  GET_ISSUES_OF_REPOSITORY,
} from '../utils/queries';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`
  }
});

export default class RouteContainer extends Component {

  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null
  }

  componentDidMount() {
    this.handleFetchFromGitHub(this.state.path);
  }

  handleChange = (evt) => {
    this.setState({path: evt.target.value});
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.handleFetchFromGitHub(this.state.path);
  }

  handleUpdate = () => {
    const {endCursor} = this.state.organization.repository.issues.pageInfo;
    this.handleFetchFromGitHub(this.state.path, endCursor);
  }

  handleFavorite = (repositoryId, viewerHasStarred) => {
    const mutation = viewerHasStarred ? REMOVE_STAR : ADD_STAR;
    const mutationId = viewerHasStarred ? 'removeStar' : 'addStar';
    return axiosGitHubGraphQL.post('', {query: mutation, variables: {repositoryId}})
            .then((response) => {
              console.log('mutation result: ', response);
              const {viewerHasStarred} = response.data.data[mutationId].starrable;
              this.setState(() => ({
                errors: this.state.errors,
                organization: {
                  ...this.state.organization,
                  repository: {
                    ...this.state.organization.repository,
                    viewerHasStarred
                  }
                }
              }));
            });
  }

  handleFetchFromGitHub = (path, cursor) => {
    console.log('path?: ', path);
    console.log('cursor?: ', cursor);
    const [organization, repository] = path.split('/');
    axiosGitHubGraphQL
      .post('', {query: GET_ISSUES_OF_REPOSITORY, variables: {organization, repository, cursor}})
      .then((response) => {
        console.log('response?: ', response);
        this.setState(() => ({
          errors: response.data.errors,
          organization: response.data.data.organization
        }));
      });
  }

  render() {
    const {path, organization, errors} = this.state;
    const {handleChange, handleSubmit, handleUpdate, handleFavorite} = this;
    return (
      <div className="route-container">
        {this.props.children({errors, path, organization, handleChange, handleSubmit, handleUpdate, handleFavorite})}
      </div>
    );
  }

}
