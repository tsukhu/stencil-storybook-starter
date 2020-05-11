import readme from './readme.md';

export default {
    notes: readme,
    knobs: {
        // This will result in the following call to knobs:
        // knobs.number('b-number', 46, { range: true, min: 46, max: 47, step: 1 });
        'cryptoData': {
          type: 'text'
        }
    }
}