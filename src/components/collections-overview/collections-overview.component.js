import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCollections} from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';

import PreviewCollection from '../../components/preview-collection/preview-collection.component'

const CollectionOverview = ({ collections}) => (
    collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
    ))
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview)