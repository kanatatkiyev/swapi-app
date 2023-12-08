import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonFields = () => {
    const renderSkeletonItem = () => <Skeleton variant="rectangular" width={'100%'} height={56} />;

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
            <Grid item xs={6}>
                {renderSkeletonItem()}
            </Grid>
        </Grid>
    );
};
