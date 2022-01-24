import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';

function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch('https://react-meetup-app-b7e5c-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => response.json())
            .then(data => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, [setIsLoading, setLoadedMeetups]);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetups;