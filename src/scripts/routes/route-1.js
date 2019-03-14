import React, {Fragment} from 'react';
import {Button, Spinner} from '@0bie/pattern-lib-react';
import {Organization} from '../components';
import {Form} from '../views';
import RouteContainer from './routeContainer';
require('../../styles/routes/route-1.css');

export default function RouteOne() {
  return (
    <RouteContainer>
      {({errors, path, organization, handleChange, handleSubmit, handleUpdate, handleFavorite}) => (
        <Fragment>
          <Form
            inputValue={path}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <div className="form-data">
            <section className="form-section">
              {errors &&
                <p>
                  <strong>Something went wrong:</strong>
                  {errors.map(error => error.message.join(' '))}
                </p>}
              {organization &&
                  <Organization
                    errors={errors}
                    organization={organization}
                    handleFavorite={handleFavorite}
                  />}
              {!organization &&
                <Spinner
                  size="xl"
                  classNames={['spinner--default']}
                />}
            </section>
            {(organization && organization.repository.issues.pageInfo.hasNextPage) ?
              <footer className="form-footer">
                <Button
                  size="xs"
                  label="More"
                  onClick={handleUpdate}
                  classNames={['btn--full', 'btn--primary', 'btn--hover']}
                />
              </footer> : null}
          </div>
        </Fragment>
      )}
    </RouteContainer>
  );
}
