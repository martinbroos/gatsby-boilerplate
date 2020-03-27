import React from 'react';
import { PlatformDetails } from '../../templates/platformDetailDataProvider';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';
import SEO from '../primitives/Seo';
import Layout from '../primitives/Layout';
import { homePath } from '../../routing/urlGenerator';

type Props = {
    details: PlatformDetails;
};

const PlatformDetail = ({ details }: Props) => (
    <Layout>
        <SEO title={`${details.title} - Platformen`} />
        <h1>Platform: {details.title}</h1>
        {documentToReactComponents(details.description.json)}
        <Link to={homePath}>Terug naar de overzicht</Link>
    </Layout>
);

export default PlatformDetail;
