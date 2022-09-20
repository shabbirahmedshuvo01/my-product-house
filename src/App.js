import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='text-4xl font-bold'>hi i am here</h1>

      <div>

        <label for="my-modal" class="btn modal-button">open modal</label>


        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
              <label for="my-modal" class="btn">Yay!</label>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
