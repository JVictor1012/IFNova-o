import './styles.css';
import { Component } from 'react';
import { Header } from '../components/Header';
import { Posts } from '../components/Posts/posts';
import { Banner } from '../components/Banner/banner';
import { ButtonPage } from '../components/ButtonPage';

class Home extends Component {
  state = { 
    posts: [],
    allposts: [],
    page :0 ,
    postsPerPage: 9
    
  };

  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsjson = await posts.json();
    const photosjson = await photos.json();

    const { postsPerPage, page } = this.state

    const postsAndPhotos = postsjson.map((post, index) => {
      return { ...post, cover: photosjson[index].url }
    })

    this.setState({ posts: postsAndPhotos.slice(page,postsPerPage),
    allposts: postsAndPhotos });

  }

  loadMorePosts = () => {
    const {page, postsPerPage, allposts, posts} = this.state

    const nextPage = page + postsPerPage;
    const nextPosts = allposts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
    console.log(posts.id)
  }


  render() {

    const { posts, page, postsPerPage, allposts } = this.state
    const noMorePosts = page + postsPerPage >= allposts.length
    return(
      <div>
      <Header />

      <Banner />
        <h2 className='title-page'>Recomendados</h2>
      <section className='container'>
       
        
      <div className="posts">
        
        {posts.map(post => (
          <Posts
          key={post.id}  
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
          /> 
        )
        )}
        
        <ButtonPage 
          text={"Carregar mais"}
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
          
          />
      </div>
          
      </section>
      </div>
    );
  }

};

export default Home;
