import * as React from 'react';
import styles from './HomePrimeiroReactJs.module.scss';
import { IHomePrimeiroReactJsProps } from './IHomePrimeiroReactJsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {IDevState} from './IDevState';

import axios from 'axios';

export default class HomePrimeiroReactJs extends React.Component<IHomePrimeiroReactJsProps, IDevState> {

  public constructor(props: IHomePrimeiroReactJsProps) {
    super(props);
    this.state = {
      items: {
        "id": "",
        "login": "",
        "avatar_url": ""
      }
    };
  }

  public componentDidMount() {
    axios.get(`https://api.github.com/users/JuanCampbsi`)
      .then((response) => {
        this.setState({
          items: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

  public render(): React.ReactElement<IHomePrimeiroReactJsProps> {
    return (
      <div className={ styles.homePrimeiroReactJs }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <header>
                  <img
                    src={this.state.items.avatar_url}
                    alt={this.state.items.login}
                    className={ styles.avatar }
                  />
                  <div className={ styles.title }>
                    <strong>{this.state.items.login}</strong>
                  </div>
                </header>
                <a href={`https://github.com/${this.state.items.login}`}>Acessar perfil no GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
