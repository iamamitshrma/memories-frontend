import { Pagination, PaginationItem} from '@material-ui/lab';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../actions/posts';


const Paginate = ({ page }) => {
    const { numberOfPage } = useSelector((state) => state.posts);
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        if(page) {
            dispatch(getPosts(page));
        }
    }, [dispatch, page])//try to remove dispatch

    return (
        <Pagination 
            classes={{ ul: classes.ul }}
            count={numberOfPage}
            page={Number(page) || 1}
            variant="outlined"
            color='primary'
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
            )}
        />
    )
};

export default Paginate;