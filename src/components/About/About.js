import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Octokit from '@octokit/rest';
import Preloader from '../Preloader/Preloader'

const octokit = new Octokit();

class About extends React.Component {

    state = {
        isLoading: true,
        repoList: [],
        username: 'stasokulov',
        fetchReposSuccess: false,
        error: '',
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: this.state.username,
        })
        .then( ({data}) => {
            this.setState({
                repoList: data,
                isLoading: false,
                fetchReposSuccess: true,
            });
        } )
        .catch(err => {
            this.setState({
                error: err,
                isLoading: false,
                fetchReposSuccess: false,
            });
        });

        octokit.users.getByUsername({
            username: this.state.username,
        })
        .then((response) => {
            this.setState({
                avatarURL: response.data.avatar_url,
                name: response.data.name,
            });
        });
    }

    render() {
        const { isLoading, repoList, avatarURL, name, fetchReposSuccess, error } = this.state;
        return(
            <CardContent>
                <h1>
                    { isLoading ? <Preloader /> : 'Обо мне' }
                </h1>

                {!isLoading &&
                    <div>
                        { !fetchReposSuccess ? 'Что-то пошло не так. Ошибка: ' + error :
                            <div>
                                <h2>
                                    Меня зовут: {name}
                                </h2>
                
                                <div>
                                    <img src={avatarURL} alt={name} width='100' />   
                                </div>
                                
                                <ol>
                                    {repoList.map(repo => (
                                        <li key={repo.id}>
                                            <a href={repo.html_url} target='blank'>
                                                {repo.name}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        }
                    </div>
                }
            </CardContent>
        );
    }
}

export default About;