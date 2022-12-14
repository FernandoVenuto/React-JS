const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Clique Aqui também!
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria existir =)");
            }
          }}
        >
          Clica aqui, por favor.
        </button>
      </div>
    </div>
  );
};

export default Events;
