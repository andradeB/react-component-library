import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export type HeroBannerClasses = {
    root?: string;
};

export type HeroBannerProps = {
    classes?: HeroBannerClasses;
    divider?: boolean;
    limit?: number;
};

export const HeroBanner = (props: HeroBannerProps & any): JSX.Element => {
    const { classes = {}, divider = false, limit = 4 } = props;
    const defaultClasses = useStyles(props);
    const isArray = Array.isArray(props.children);
    return (
        <React.Fragment>
            <div className={clsx(defaultClasses.root, classes.root)} style={props.style}>
                {props.children && isArray && props.children.slice(0, limit).map((child: any) => child)}
                {props.children && !isArray && <>{props.children}</>}
            </div>
            {divider && <Divider />}
        </React.Fragment>
    );
};

HeroBanner.displayName = 'HeroBanner';
