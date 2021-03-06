import React from 'react';
import { PlatformDetails } from '../../templates/platformDetailDataProvider';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';
import SEO from '../primitives/Seo';
import Layout from '../primitives/Layout';
import { homePath } from '../../routing/urlGenerator';
import Heading, { TagOptions } from '../primitives/heading/Heading';

type Props = {
    details: PlatformDetails;
};

const PlatformDetail = ({ details }: Props) => (
    <Layout>
        <SEO title={`${details.title} - Platformen`} />
        <Heading tag={TagOptions.h1} uppercase>
            Platform: {details.title}
        </Heading>
        {documentToReactComponents(details.description.json)}
        <Link to={homePath}>Terug naar de overzicht</Link>
    </Layout>
);

export default PlatformDetail;
