import React, { useState, useEffect } from 'react';
import { all_user_post_url } from '../../ApiUrls';

export function Feed({ userId }) {

    const [posts, setPosts] = useState([]);

    function updatePostList(newPosts) {
        setPosts(posts => posts.concat(newPosts));
    }

    useEffect(() => {
        console.log('api call ');
        const payload = {
            userId: userId,
            postedDate: Date.now()
        };
        import('../../ApiRequests').then(obj => {
            obj.getApiRequestCall(all_user_post_url, payload, function(response) {
                if(response.data !== null && response.data !== undefined && response.data.Items !== null && response.data.Items !== undefined && response.data.Items.length >= 0) {
                    updatePostList(response.data.Items);
                }
            });
        });
    }, []);

    // view
    if(posts.length === 0) {
        return (
            <>
                No Data...
            </>
        )
    } else {
        return (
            <>
              {posts.map((post, index) => (
                <div key={index}>
                    {post.userId}
                </div>
              ))}
            </>
        )
    }
}