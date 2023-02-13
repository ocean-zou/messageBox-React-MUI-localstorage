import LinearProgress from '@mui/material/LinearProgress';
export default function CreateNote({ textHandle, inputText, saveHandle }) {
  const charLength = 100;
  const charLeft = charLength - inputText.length;
  return (
    <div className='note'>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type..."
        maxLength="100"
        onChange={textHandle}
      ></textarea>
      <div className='note__footer'>
        <span className='label'>{charLeft} left</span>
        <button className='note__save' onClick={saveHandle}>Save</button>
      </div>
      <LinearProgress className='char__progress'
        variant='determinate'
        value={charLeft} />
    </div>
  )
}
