const Order = () => {
  return (
    <>
      <div>Podaj dane i zatwierdź formularz</div>
      <form>
          <div>
              <label htmlFor="name">Imię</label>
              <input type="text" name="name" id="name" />
          </div>
          <div>
              <label htmlFor="last_name">Imię</label>
              <input type="text" name="last_name" id="last_name" />
          </div>
          <div>
              <label htmlFor="town">Miejścowość</label>
              <input type="text" name="town" id="town" />
          </div>
          <div>
              <label htmlFor="post_code">Kod pocztowy</label>
              <input type="text" name="post_code" id="post_code" />
          </div>

          <button>Zamawiam i płacę</button>
      </form>
    </>
  );
};

export default Order;
