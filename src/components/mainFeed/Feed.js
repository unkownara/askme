import React, { useState, useEffect } from 'react';
import { all_user_post_url } from '../../ApiUrls';

export function Feed({ userId }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('api call ');
        const payload = {
            userId: userId,
            postedDate: Date.now()
        };
        import('../../ApiRequests').then(obj => {
            obj.getApiRequestCall(all_user_post_url, payload, function(response) {
                console.log('post response ', response);
                // setPosts(response);
            });
        });
    }, [posts]);

    if(posts.length <= 0 ) {
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
                    {post}
                </div>
              ))}
            </>
        )
    }
}