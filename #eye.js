#eye.js
<html>
<body>
   
    <section class="hero">
       <div>
            <a href="#appointment" class="btn btn-primary">Book Appointment Now</a>
        </div>
    </section>

    
    <section class="appointment-section" id="appointment">
        <div class="container">
            <div class="section-title">
                <h2>Schedule Your Eye Surgery</h2>
                <p>Fill out the form below and our team will contact you within 24 hours</p>
            </div>

            <form class="appointment-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="number" id="phone" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" id="dob" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="surgery-type">Type of Surgery</label>
                        <select id="surgery-type" class="form-control" required>
                            <option value="">Select Surgery Type</option>
                            <option value="cataract">Cataract Surgery</option>
                            <option value="lasik">LASIK/Refractive Surgery</option>
                            <option value="glaucoma">Glaucoma Surgery</option>
                            <option value="retinal">Retinal Surgery</option>
                            <option value="cornea">Corneal Transplant</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="preferred-date">Preferred Surgery Date</label>
                        <input type="date" id="preferred-date" class="form-control">
                    </div>
                    <div class="form-group full-width">
                        <label for="medical-history">Medical History/Notes</label>
                        <textarea id="medical-history" class="form-control"></textarea>
                    </div>
                    
                </div>
                <button type="submit" class="submit-btn">Submit Request</button>
            </form>
        </div>
    </section>
</html>

   

    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</body>
