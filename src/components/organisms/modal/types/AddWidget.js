import { Heading, Select } from '@atoms';

const classes = {
  root: '',
};

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
];

const AddWidget = () => {
  return (
    <div className={classes.root}>
      <Select options={options} placeholder='Select widget' />
    </div>
  );
};

export default AddWidget;
