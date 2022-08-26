function generateEmployeeInfo(data) {
  return ` <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${data.ManagerName}</h3>
          <h4>${data.ManagerPosition}</h4>
      </div>

      <div class="card-body">
          <p class="id">ID: ${data.ManagerId}</p>
          <p class="email">Email: <a href="mailto:john@gmail.com">${data.ManagerEmail}</a></p>
          <p class="office">${data.OfficeNumber}</p>
      </div>

  </div>
</div>

<div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${data.EngineerName}</h3>
          <h4>${data.EngineerPosition}</h4>
      </div>

      <div class="card-body">
          <p class="id">ID: ${data.EngineerId}</p>
          <p class="email">Email: <a href="mailto:nicole.elisaw@gmail.com">${data.EngineerEmail}</a></p>
      </div>

  </div>
</div>

<div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${data.InternName}</h3>
          <h4>${data.InternPosition}</h4>

      <div class="card-body">
          <p class="id">ID: ${data.InternId}</p>
          <p class="email">Email:<a href="mailto:jack@aol.com">${data.InternEmail}</a></p>
          <p class="school">${data.InternSchool}</p>
      </div>
</main>

</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html> 

`;
}

module.exports = generateEmployeeInfo;
