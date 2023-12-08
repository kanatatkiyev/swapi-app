import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonList = () => {
    const renderSkeletonItem = () => <Skeleton variant="rectangular" width={'100%'} height={'100%'} />;

    return (
        <>
            <Grid item md={6} xs={12}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item md={6} xs={12}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item md={6} xs={12}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item md={6} xs={12}>
                {renderSkeletonItem()}
            </Grid>
        </>
    );
};
