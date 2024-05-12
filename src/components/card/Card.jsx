import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const person = [
            { id: 1, first_name: "Murad", last_name: "Gazymagomedov", bio: "Passionate coder exploring front-end and back-end web development.", img: "https://images.hdqwalls.com/download/avengers-endgame-thanos-eh-1920x1080.jpg" },
            { id: 2, first_name: "Samantha", last_name: "Evans", bio: "Tech enthusiast dedicated to crafting seamless web experiences.", img: "https://image.zype.com/593087b25d3c19148e001735/5a1f3553ec637415b5000830/custom_thumbnail/1080.jpg" },
            { id: 3, first_name: "Brandon", last_name: "Mitchell", bio: "Creative problem-solver building innovative web solutions.", img: "https://www.desktopbackground.org/download/1920x1080/2012/10/08/465026_spider-man-climbing-building-comic-wallpaper-jpg_1920x1200_h.jpg" },
            { id: 4, first_name: "Lauren", last_name: "Hayes", bio: "Driven developer merging design and functionality seamlessly.", img: "https://www.rewind.sk/wp-content/uploads/2018/08/thumb_34.jpg" },
            { id: 5, first_name: "Kevin", last_name: "Patel", bio: "Web wizard weaving digital magic with code and creativity.", img: "https://img.goodfon.ru/original/1920x1080/5/f6/3d-funny-monster-cartoon-cute-2928.jpg" },
        ];

        return (
            <div className="container">
                <div className="row g-3">
                    {person.map(({ id, first_name, last_name, bio, img }) => (
                        <div className="col-3" key={id}>
                            <div className="card">
                                <img src={img} className="card-img-top" alt={img} />
                                <div className="card-body">
                                    <h5 className="card-title">{first_name} {last_name}</h5>
                                    <p className="card-text">{bio}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Card;