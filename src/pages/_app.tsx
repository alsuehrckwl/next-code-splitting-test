import * as React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import widthReduxSaga from 'next-redux-saga';
import { wrapper, SagaStore } from '@store/configure';
import { END } from 'redux-saga';

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    if (ctx.req) {
      const store: SagaStore = ctx.store;
      store.dispatch(END);
      await store.sagaTask?.toPromise();
    }

    return {
      pageProps,
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(widthReduxSaga(MyApp));
