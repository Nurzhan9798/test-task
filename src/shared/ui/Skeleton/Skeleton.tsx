import { CSSProperties, memo } from 'react';
import  './Skeleton.css';

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        height,
        width,
        border,
    } = props;

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={'skeleton'}
            style={style}
        />
    );
});
