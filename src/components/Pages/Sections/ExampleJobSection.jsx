import React, { Component } from 'react';
import firebase from './../../../firebase';
import { Link } from 'react-router-dom';
import { JobCard } from './../Cards/';

export default class ExampleJobSection extends Component {

    constructor() {
        super()
        this.state = {
            card: []
        }
    }
    componentDidMount = () => {
        var card = []
        firebase.database().ref('posts/').once('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                var jobs = {
                    title: childSnapshot.val().title,
                    location: childSnapshot.val().location,
                    work_time: childSnapshot.val().work_time,
                    duration: childSnapshot.val().duration,
                    desc: childSnapshot.val().desc,
                    owner: childSnapshot.val().owner,
                    post_key: childSnapshot.val().post_key,
                }
                let newCard = (
                    <div className="col-6">
                        <JobCard job={jobs} />
                    </div>
                )
                // console.log(jobs)
                card.push(newCard)
                this.setState({
                    card: card
                })
            })
        })
    }
    render() {
        let cards = [];
        for (let index = 3; index >= 0; index--) {
            const element = this.state.card[index];
            cards.push(element)
        }
        return (
            <section id="examplejobsection-guest">
                <div className="container">
                    <h1>ตัวอย่างงานที่รับสมัครล่าสุด</h1>
                    <div className="row" key={cards.toString()}>
                        {cards}
                    </div>
                </div>
            </section>
        )
    }
}