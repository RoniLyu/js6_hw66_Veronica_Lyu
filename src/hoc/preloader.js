import React, {Component, Fragment} from 'react';
import Spinner from "../components/UI/Spiner/Spiner";


const preloader = (WrappedComponent, axiosApi) => {
    return class LoaderHOC extends Component {

        constructor(props) {
            super(props);

            this.state = {
                loading: true
            };

            this.state.interceptorId = axiosApi.interceptors.response.use(res => {
                console.log('loaded');
                this.setState({loading: false});
                return res;
            }, err => err);
        }

        componentWillUnmount() {
            axiosApi.interceptors.response.eject(this.state.interceptorId);
        }


        render() {
            return (
                <Fragment>
                    <Spinner show={this.state.loading}/>
                    <WrappedComponent {...this.props}/>
                </Fragment>
            )
        }

    }
}



export default preloader;