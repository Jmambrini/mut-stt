/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Layout from '../layout/Layout';

const PublicRoutes = ({ component: Component }) => (
  <Route
    render={
        (props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
  />
);

PublicRoutes.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PublicRoutes;
