$(document).ready(function addSubject() {
  $("#subject").attr({ type: "text", placeholder: "Enter Subject" });
  $("#marks").attr({ type: "number", placeholder: "Enter Passing Marks" });

  $(".btn").on("click", function () {
    let subject_value = $("#subject").val().trim();
    let passing_marks_value = parseInt($("#marks").val().trim());

    if (!subject_value || !passing_marks_value) {
      alert("Please enter all the fields");
      return;
    }

    let row = $("<tr></tr>");

    let subject_cell = $("<td></td>").text(subject_value);
    let passing_marks_cell = $("<td></td>").text(passing_marks_value);

    let marks_obtained_cell = $("<td></td>");
    let input_field = $("<input></input>");
    input_field.attr({
      type: "number",
      placeholder: "Enter Passing Marks",
    });

    let status_cell = $("<td></td>");
    let status_span = $("<span></span>");
    $(status_cell).append(status_span);

    let action_cell = $("<td></td>");
    let delete_btn = $("<span>Delete</span>").addClass("delete");

    $(input_field).on("input", function () {
      update_row_status($(this),status_span,row,passing_marks_value);
      update_footer();
    });

    $(delete_btn).on("click", function () {
      $row.remove();
      update_footer();
    });

    $(marks_obtained_cell).append(input_field)
    $(action_cell).append(delete_btn)

    $(row).append(
        $(subject_cell),
        $(passing_marks_cell),
        $(marks_obtained_cell),
        $(status_cell),
        $(action_cell),
    )

    $(".table-body").append(row)

    $(subject_cell).val("")
    $(marks_obtained_cell).val("")
    update_footer()
  });

  function update_row_status(input,status,row,passing_marks){
    let input = parseInt($(input.value))
    if(input >= passing_marks){
        $(row).class("pass")
        status.class("status-pass")
        status.text("Pass")
    }else{
        $(row).class("fail")
        $(status).class("status-fail")
        $(status).attr("Fail")
    }
  }
  function update_footer(){
    let overall_status = true
    let total_subject = 0
    let total_passing_marks = 0
    let total_marks_obtained = 0

    $("table_body tr").each(function(){
        let passing_marks_data = ($((this).find("td : nth-child(1)").text()))
        let status_data = $((this).find("td:nth-child(3)").text())
        let obtained_marks_data = parseInt($((this).find("input").val()))

        if(status_data === "Fail"){
            overall_status = false
        }
        total_subject++;

        $("#sub-total").text(total_subject)
        $("#passing-total").text(isNaN(passing_marks_data) ? 0 : passing_marks_data)
        $("#marks-total").text(isNaN(obtained_marks_data) ? 0 : total_marks_obtained)
        $("#overall-status").text(overall_status ? "Pass" : "Fail")
    })
  }
});
