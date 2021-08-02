import React, { Component } from 'react';
import { Form, Button, Input, Message, Divider, Icon, Header } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    candidate1:'',
    candidate2:'',
    candidate3:'',
    tokenStirng:'',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.candidate1,this.state.candidate2,this.state.candidate3)
        .send({
          from: accounts[0]
        });

      

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  dummy()
  {
    console.log(this.state);
  }

  render() {
    return (
      <Layout>
        <Divider horizontal>
          <Header as='h2'>
          <Icon name='tag' />
          Create a New Campaign
          </Header>
        </Divider>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Candidate 1</label>
            <Input
              value={this.state.candidate1}
              onChange={event =>
                this.setState({candidate1: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Candidate 2</label>
            <Input
              value={this.state.candidate2}
              onChange={event =>
                this.setState({candidate2: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Candidate 3</label>
            <Input
              value={this.state.candidate3}
              onChange={event =>
                this.setState({candidate3: event.target.value })}
            />
          </Form.Field>


          <Form.Field>
            <label>Secret Token String (Seperated by " " delimeter)</label>
            <Input
              value={this.state.tokenStirng}
              onChange={event =>
                this.setState({tokenStirng: event.target.value })}
            />
          </Form.Field>
          {this.dummy()}

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} basic color='violet' icon labelPosition='left'>
            <Icon name='add circle'/>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
