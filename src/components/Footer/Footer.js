import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = ({count}) => (
    <Typography component="p">
        Осталось сделать: {count}
    </Typography>
);

Footer.defaultProps = {
    count: 0
};

export default Footer;