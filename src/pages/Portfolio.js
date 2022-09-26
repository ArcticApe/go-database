import Card_Cuisine from "../components/common/cards/Card_Cuisine";
import Card_Career from "../components/common/cards/Card_Career";
import Card_Expedition from "../components/common/cards/Card_Expedition";

import "./styles/Portfolio.css";

const Portfolio = () => {
    return (
        <section>
            <div className="card-position">
                <Card_Cuisine
                title='Cuisine'
                imageUrl="./photos/Card1.jpeg"
                body= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate eum molestias, numquam molestiae nostrum beatae officia magnam error nobis laudantium esse magni inventore delectus doloribus eaque fugiat quam quasi ad suscipit. Cumque ea quidem laudantium quas.'
                />
                
            </div>
            <div className="card-position">
                <Card_Career
                title='Career'
                imageUrl='./photos/Card2.jpg'
                body= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate eum molestias, numquam molestiae nostrum beatae officia magnam error nobis laudantium esse magni inventore delectus doloribus eaque fugiat quam quasi ad suscipit. Cumque ea quidem laudantium quas.'
                />
            </div>
            <div className="card-position">
                <Card_Expedition
                title='Expedition'
                imageUrl='./photos/Card3.jpeg'
                body= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate eum molestias, numquam molestiae nostrum beatae officia magnam error nobis laudantium esse magni inventore delectus doloribus eaque fugiat quam quasi ad suscipit. Cumque ea quidem laudantium quas.'
                />
            </div>
        </section>
    )
}

export default Portfolio;