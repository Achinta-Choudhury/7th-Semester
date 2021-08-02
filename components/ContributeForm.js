import React, { Component } from 'react';
import { Form, Input, Message, Button, Icon } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';



class ContributeForm extends Component {
  state = {
    value: '',
    candidateChoice:'',
    errorMessage: '',
    loading: false
  };



  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      console.log(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.vote((this.state.candidateChoice - 1)).send({
        from: accounts[0]
      });
      window.location.reload();
      //Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Enter Candidate's Serial Number</label>
          <Input
            value={this.state.candidateChoice}
            onChange={event => this.setState({ candidateChoice: event.target.value })}
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button basic color='violet' loading={this.state.loading} icon labelPosition='left'>
        <Icon name='hand pointer'/>
          Vote
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
