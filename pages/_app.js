import React from 'react'
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import {makeStore} from "../store";
import Storage from '../util/api/libs/jwtStorage'
import API from '../configs/apis'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Customs.css'
import '../assets/css/main.css'

// if (Storage.load()) window.location.href = API.APP;

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
         
        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
            }
        };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

};

export default withRedux(makeStore)(MyApp)
